import React, { useState, useEffect, useRef } from 'react';

// 1. 카카오 지도 타입 선언
declare global {
  interface Window {
    kakao: any;
  }
}

interface PlaceType {
  id: string;
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  x: string;
  y: string;
}

const KakaoMapSearch = () => {
  const [keyword, setKeyword] = useState<string>('성수동맛집');
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  
  // 리액트에서 DOM에 접근하기 위한 Ref
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const ps = useRef<any>(null);
  const infowindow = useRef<any>(null);
  const markers = useRef<any[]>([]);

  // 2. 지도 초기화
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };
        
        // 지도 인스턴스 생성
        mapInstance.current = new window.kakao.maps.Map(mapContainer.current, options);
        // 장소 검색 객체 생성
        ps.current = new window.kakao.maps.services.Places();
        // 인포윈도우 생성
        infowindow.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        
        // 초기 검색 실행 (선택 사항)
        searchPlaces('성수동');
      });
    }
  }, []);

  // 3. 키워드 검색 함수
  const searchPlaces = (searchKeyword: string) => {
    if (!searchKeyword.trim()) {
      alert('키워드를 입력해주세요!');
      return;
    }
    ps.current.keywordSearch(searchKeyword, placesSearchCB);
  };

  // 4. 장소검색 완료 콜백
  const placesSearchCB = (data: PlaceType[], status: any, paginationObj: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      setPlaces(data);
      setPagination(paginationObj);
      displayPlaces(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  // 5. 마커 표시 및 범위 재설정
  const displayPlaces = (placesData: PlaceType[]) => {
    const bounds = new window.kakao.maps.LatLngBounds();
    
    // 기존 마커 제거
    removeMarker();

    placesData.forEach((place, i) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(placePosition, i);
      
      bounds.extend(placePosition);

      // 마커 이벤트 리스너 (mouseover, mouseout)
      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        displayInfowindow(marker, place.place_name);
      });
      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        infowindow.current.close();
      });
    });

    // 지도 범위 재설정
    mapInstance.current.setBounds(bounds);
  };

  // 6. 마커 생성 보조 함수
  const addMarker = (position: any, idx: number) => {
    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
    const marker = new window.kakao.maps.Marker({
      position,
      image: markerImage,
    });

    marker.setMap(mapInstance.current);
    markers.current.push(marker);
    return marker;
  };

  const removeMarker = () => {
    markers.current.forEach((m) => m.setMap(null));
    markers.current = [];
  };

  const displayInfowindow = (marker: any, title: string) => {
    const content = `<div style="padding:5px;z-index:1;color:black;">${title}</div>`;
    infowindow.current.setContent(content);
    infowindow.current.open(mapInstance.current, marker);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 h-[800px]">
      {/* 왼쪽 사이드바: 검색창 및 리스트 */}
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        <div className="p-4 border-b">
          <div className="flex gap-2">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 border p-2 rounded text-black"
              placeholder="장소를 입력하세요"
            />
            <button 
              onClick={() => searchPlaces(keyword)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              검색
            </button>
          </div>
        </div>

        <ul className="flex-1 overflow-y-auto">
          {places.map((place, i) => (
            <li 
              key={place.id} 
              className="p-4 border-b hover:bg-gray-50 cursor-pointer"
              onMouseOver={() => {
                // 마커와 연동된 인포윈도우 표시 로직
                const marker = markers.current[i];
                displayInfowindow(marker, place.place_name);
              }}
              onMouseOut={() => infowindow.current.close()}
            >
              <div className="flex items-start gap-3">
                <span className={`inline-block w-6 h-6 text-center text-xs bg-blue-600 text-white rounded-full mt-1`}>
                  {i + 1}
                </span>
                <div>
                  <h5 className="font-bold text-gray-900">{place.place_name}</h5>
                  {place.road_address_name ? (
                    <>
                      <p className="text-sm text-gray-600">{place.road_address_name}</p>
                      <p className="text-xs text-gray-400">{place.address_name}</p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-600">{place.address_name}</p>
                  )}
                  <p className="text-xs text-green-600 mt-1">{place.phone}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* 페이지네이션 */}
        {pagination && (
          <div className="flex justify-center gap-2 p-4 border-t">
            {Array.from({ length: pagination.last }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => pagination.gotoPage(page)}
                className={`px-3 py-1 rounded ${pagination.current === page ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 오른쪽: 지도 영역 */}
      <div className="flex-1 relative rounded-lg overflow-hidden border">
        <div ref={mapContainer} style={{ width: '100%', height: '100%' }}></div>
      </div>
    </div>
  );
};

export default KakaoMapSearch;