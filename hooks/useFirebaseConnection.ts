import { db } from "@/libs/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useFirebaseConnection = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getDocs(collection(db, "todo"));
        if (response) {
          Alert.alert("Success", "Firebase connected");
        }
      } catch (e) {
        Alert.alert("Error", `firebase has a problem: ${e}`);
      }
    };
    fetch();
  }, []);
};

export default useFirebaseConnection
