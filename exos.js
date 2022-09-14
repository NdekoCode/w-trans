const handleLogin = () => {
  (async () => {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${userName}&password=${passWord}`,
    };
    try {
      const response = await fetch("https:....", params);
      const responseData = await response.json();
      if (response.status === 200) {
        setUserData(responseData);
        console.log(userData);
      } else {
        console.log("Non authentifie");
      }
    } catch (error) {
      console.log(error.message);
    }
  })();
};
