import React from 'react';
import { Animated, Dimensions, StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, Text, SafeAreaView } from 'react-native';

type DrawerContextType = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
};

const DrawerContext = React.createContext<DrawerContextType | undefined>(undefined);

export function useDrawer() {
  const ctx = React.useContext(DrawerContext);
  if (!ctx) throw new Error('useDrawer must be used within DrawerProvider');
  return ctx;
}

export default function DrawerProvider({ children, navigation }: { children: React.ReactNode; navigation: any }) {
  const screenWidth = Dimensions.get('window').width;
  const drawerWidth = Math.min(320, screenWidth * 0.78);
  const anim = React.useRef(new Animated.Value(-drawerWidth)).current;
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setIsOpen(true));
  }, [anim]);

  const close = React.useCallback(() => {
    Animated.timing(anim, {
      toValue: -drawerWidth,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setIsOpen(false));
  }, [anim]);

  const toggle = React.useCallback(() => {
    if (isOpen) close(); else open();
  }, [isOpen, open, close]);

  const overlayOpacity = anim.interpolate({
    inputRange: [-drawerWidth, 0],
    outputRange: [0, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <DrawerContext.Provider value={{ open, close, toggle, isOpen }}>
      {children}

      <Animated.View
        pointerEvents={isOpen ? 'auto' : 'none'}
        style={[styles.overlay, { opacity: overlayOpacity }]}
      >
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.overlayTouchable} />
        </TouchableWithoutFeedback>
      </Animated.View>

      <Animated.View
        style={[
          styles.drawer,
          { width: drawerWidth, transform: [{ translateX: anim }] },
        ]}
        pointerEvents={isOpen ? 'auto' : 'none'}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Menu</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('Tabs');
              close();
            }}
          >
            <Text style={styles.itemText}>Principal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('Sobre');
              close();
            }}
          >
            <Text style={styles.itemText}>Sobre</Text>
          </TouchableOpacity>

        </SafeAreaView>
      </Animated.View>
    </DrawerContext.Provider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
  },
  overlayTouchable: { flex: 1 },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fff',
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 8,
  },
  container: { flex: 1, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: '700', marginVertical: 12 },
  item: { paddingVertical: 12 },
  itemText: { fontSize: 16 },
});
