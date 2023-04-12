import { useState, useEffect } from "react";

let highestZindex = 1208;

const setBodyScroll = (hideScroll) => {
  if (hideScroll) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";
    document.body.classList.add("modal-open");
  } else {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = 0;
    document.body.classList.remove("modal-open");
  }
};

const modalsMap = new Proxy(
  {},
  {
    set: (target, key, value) => {
      target[key] = value;

      const isAnyModalVisible = Object.keys(target).some(
        (key) => target[key].isVisibleByCss
      );

      setBodyScroll(isAnyModalVisible);

      return true;
    },
  }
);

const useModalManager = () => {
  const [id, setId] = useState(null);
  const [isVisibleByCss, setIsVisibleByCss] = useState(false);
  const [zIndex, setZIndex] = useState(-1);

  const bringModalToTop = () => {
    highestZindex += 1;
    setZIndex(highestZindex);
  };

  useEffect(() => {
    setId(Math.floor(Math.random() * 100000000000000000));
  }, []);

  useEffect(() => {
    if (id) {
      if (isVisibleByCss) {
        bringModalToTop();
      } else {
        setZIndex(-1);
      }
    }
  }, [id, isVisibleByCss]);

  useEffect(() => {
    if (id) {
      modalsMap[id] = { zIndex, isVisibleByCss: zIndex > 0 };
    }
  }, [id, zIndex]);

  useEffect(() => {
    return () => {
      delete modalsMap[id];
    };
  }, [id]);

  return { id, setIsVisibleByCss, zIndex, bringModalToTop };
};

export default useModalManager;
