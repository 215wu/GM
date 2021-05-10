const updateUserDataAction = userData => {
  console.log("updateUserDataAction:userData",userData);
    return {
      type: "UPDATE_USERDATA",
      userData: userData
    };
  };

export default updateUserDataAction;