import React, { useState, useRef, useEffect } from 'react'

const TARGET_WIDTH = 1260;
const TARGET_HEIGHT = 882;

const useWidth = myRef => {
  const getWidth = () => (myRef.current ? myRef.current.offsetWidth : TARGET_WIDTH)

  const [width, setWidth] = useState(TARGET_WIDTH)

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth())
    }

    if (myRef.current) {
      setWidth(getWidth())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return width;
};

const LiveDashboard = () => {
  const frameContainerRef = useRef();
  const width = useWidth(frameContainerRef);

  const ratio = width / TARGET_WIDTH;
  const ratioString = "scale(" + ratio + ")";
  const calculatedHeight = TARGET_HEIGHT * ratio;

  return (
      <div ref={frameContainerRef} style={{ height: calculatedHeight }}>
        <iframe
          src={"https://qualityregistry.eu/mb-aux/public/dashboard/81ed5a47-8a9b-4eda-bd04-da0baacc99a1"}
          frameBorder={0}
          width={TARGET_WIDTH}
          height={TARGET_HEIGHT}
          style={{ transform: ratioString, transformOrigin: "top left" }}
          allowTransparency="true"

        ></iframe>
      </div>
  )
};

export default LiveDashboard;
