import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import PrivateNavigation from "./PrivateNavigation";
import BottomMenu from '@/components/layout/bottom-menu/BottomMenu'

const Navigation = () => {

  const navRef = useNavigationContainerRef();

  const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined) 

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name)

    const listener = navRef.addListener('state', () => setCurrentRoute(navRef.getCurrentRoute()?.name))

    return () => {
      navRef.removeListener('state', listener)
    }
  }, [])
  
  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigation />
      </NavigationContainer>
      {currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  );
};

export default Navigation;
