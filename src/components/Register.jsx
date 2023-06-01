import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import google from "../images/google.png";
import apple from "../images/apple.png";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../Redux/data/action";

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "480px",
    height: "1159px",
    border: "1px solid yellow",
    padding: "2px",
    fontSize: "14px",
    fontFamily: "Poppins",
  },
  [theme.breakpoints.down("sm")]: {
    width: "360px",
    height: "1159px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1240px",
    height: "984px",
  },
}));
const StackWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "530px",
    alignItems: "center",
    // border: "1px solid yellow",
    fontSize: "14px",
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: " column",
    justifyContent: "center",
    marginTop: "2%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "330px",
    textAlign: "start",
    // border: "1px solid black",
    fontSize: "14px",
    fontFamily: "Poppins",
    alignItems: "center",
    spacing: "14px",
    display: "flex",

    flexDirection: " column",
    justifyContent: "center",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1040px",
    // height: "904px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2%",
    textAlign: "start",
    // border: "1px solid red",
  },
}));
const SelectWrapper = styled(Select)(({ theme }) => ({
  marginTop: "2%",
  [theme.breakpoints.down("md")]: {
    width: "330px",
    height: "56px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "330px",
    height: "56px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "460px",
    height: "60px",
  },
}));
const InputWrapper = styled(OutlinedInput)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "330px",
    height: "56px",
    alignItems: "center",
    padding: "2%",
    fontSize: "14px",
    fontFamily: "Poppins",
    display: "flex",
    marginTop: "3%",
    flexDirection: " column",
    justifyContent: "center",

    border: "1px solid rgba(23, 70, 162, 0.2)",
    borderRadius: "6px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "330px",
    height: "56px",
    textAlign: "start",
    marginTop: "2%",
    fontSize: "14px",
    fontFamily: "Poppins",
    border: "1px solid rgba(23, 70, 162, 0.2)",
    borderRadius: "6px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "460px",
    height: "60px",
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    marginTop: "2%",
    border: "1px solid rgba(23, 70, 162, 0.2)",
    borderRadius: "6px",
    gap: "2%",
  },
}));

const AddressWrapper = styled(OutlinedInput)(({ theme }) => ({
  background: "rgba(23, 70, 162, 0.05)",
  textAlign: "center",

  marginTop: "2%",
  border: "1px solid rgba(23, 70, 162, 0.2)",
  borderRadius: "6px",
  [theme.breakpoints.down("md")]: {
    width: "330px",
    height: "249px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "330px",
    height: "259px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1040px",
    height: "131px",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: " #212427",
  fontWeight: 600,
  paddingTop: "2em",
  fontFamily: "Poppins",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "40px",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: " #212427",
  fontWeight: 500,

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));

const FormText = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  color: " #1746A2",
  fontWeight: 400,

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));
const ButtonWrapper = styled(Button)(({ theme }) => ({
  color: " white",
  fontWeight: 400,

  margin: "auto",

  borderRadius: "40px",
  bgcolor: "red",
  transform: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    width: "260px",
    height: "46px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    width: "260px",
    height: "46px",
    marginTop: "16%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
    width: "300px",
    height: "60px",
  },
}));
const ModalWrapper = styled(Box)(({ theme }) => ({
  border: "2px solid rgba(255, 111, 0, 0.5)",
  boxShadow: 24,
  borderRadius: "30px",
  p: 4,
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    width: "370px",
    height: "370px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    width: "370px",
    height: "310px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "16px",
    width: "861px",
    height: "385px",
  },
}));

const ModalButton = styled(Button)(({ theme }) => ({
  background: "#1746A2",
  borderRadius: "40px",
  color: "white",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    width: "200px",
    height: "46px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    width: "180px",
    height: "46px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "16px",
    width: "217px",
    height: "58px",
  },
}));

const validateName = (name) => {
  const nameRegex = /^[a-z ,.'-]+$/i;
  return nameRegex.test(name);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9]{10}$/;
  return phoneRegex.test(phone);
};

const validatePin = (pin) => {
  let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
  return regex.test(pin);
};

const Register = () => {
  const data = useSelector((store) => store.data.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const margin = { marginTop: "50%" };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [hospitalName, setHospitalName] = useState("");
  const [hospitalNameError, setHospitalNameError] = useState(false);

  const [cityName, setCityName] = useState("");
  const [cityNameError, setCityNameError] = useState(false);

  const [hospitalType, setHospitalType] = useState("");
  const [hospitalTypeError, setHospitalTypeError] = useState(false);

  const [stateName, setStateName] = useState("");
  const [stateNameError, setStateNameError] = useState(false);

  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const handleChange = (e) => {
    setHospitalType(e.target.value);
  };
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name && name < 3) {
      // The name is valid
      setNameError(true);
    } else {
      // The name is invalid
      setNameError(false);
    }
    // if (!hospitalName || hospitalName.length < 3) {
    //   setHospitalNameError(true);
    // } else {

    // }
    if (!validateName(cityName)) {
      setCityNameError(true);
    } else {
      setCityNameError(false);
    }
    if (!hospitalType) {
      setHospitalTypeError(true);
    } else {
      setHospitalTypeError(false);
    }
    if (!validateName(stateName)) {
      setStateNameError(true);
    } else {
      setStateNameError(false);
    }
    // if (!pin || pin.length === 6 || pin === NaN) {
    //   setPinError(true);
    // } else {
    //   setPinError(false);
    // }
    if (!address || address.length < 3) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
    if (!phone) {
      setPhoneError(true);
    } else {
      if (!validatePhone(phone)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
        console.log(phone); // do something with the data
      }
    }
    if (!pin) {
      setPinError(true);
    } else {
      if (!validatePin(pin)) {
        setPinError(true);
      } else {
        setPinError(false);
        console.log(phone); // do something with the data
      }
    }

    if (
      name &&
      cityName &&
      stateName &&
      phone &&
      address &&
      pin &&
      hospitalType
    ) {
      let postData = {
        userid: "OyZFId9xjXNrPvynAGW6JiZutZo2",

        hospid: "abcdhospid",
        username: name,
        city: cityName,
        hosptype: hospitalType,
        state: stateName,
        mobile: phone,
        zip: pin,
        address: address,
      };
      // setOpen(true);
      dispatch(postRegister(postData));
      console.log("postData", postData);
    } else {
      // setOpen(false);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // border: "1px solid red",
          flexDirection: "column",
        }}>
        <Wrapper
          sx={{
            boxSizing: " border-box",

            marginTop: "100px",
            width: "1240px",
            height: "700px",
            left: "calc(50% - 1240px/2)",
            textAlign: "center",
            border: "2px solid rgba(255, 115, 29, 0.5)",
            filter: "drop-shadow(0px 4px 4px #C7C7C7)",
            borderRadius: "60px",
          }}>
          <Heading>Register</Heading>
          <Text sx={{ marginTop: "2%" }}>
            Please enter the Hospital information, then use the{" "}
            <span style={{ color: "#FF731D" }}>services. </span>
          </Text>

          <Box
            component="form"
            sx={{
              // border: "1px solid green",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3%",
            }}
            noValidate
            autoComplete="off">
            <StackWrapper
              // sx={{ border: "1px solid red" }}
              direction={{ xs: "column", sm: "row" }}
              useFlexGap
              flexWrap="wrap"
              spacing={{ xs: 1, sm: 8, md: 8 }}>
              <FormControl>
                <FormText>Hospital Name</FormText>
                <InputWrapper
                  variant="filled"
                  autoComplete="on"
                  color="success"
                  placeholder="Hospital Name"
                  focused
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  sx={{
                    bgcolor: "rgba(23, 70, 162, 0.05)",
                    "& fieldset": { border: "none" },
                  }}
                />
                {nameError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Please enter a valid hospital name
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormText>City</FormText>
                <InputWrapper
                  variant="filled"
                  color="success"
                  focused
                  placeholder="City"
                  type="type"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  sx={{
                    bgcolor: "rgba(23, 70, 162, 0.05)",
                    "& fieldset": { border: "none" },
                  }}
                />
                {cityNameError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Please enter a valid city
                  </FormHelperText>
                )}
              </FormControl>
            </StackWrapper>
            <StackWrapper
              // sx={{ border: "1px solid red" }}
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 8 }}>
              <FormControl>
                <FormText>Hospital Type</FormText>
                <FormControl>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                      marginTop: "2%",
                      color: "#a9a9a9",
                      opacity: 1,
                    }}>
                    Hospital type
                  </InputLabel>
                  <SelectWrapper
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Hospital Type"
                    sx={{
                      bgcolor: "rgba(23, 70, 162, 0.05)",
                      "& fieldset": { border: "none" },
                      border: "1px solid rgba(23, 70, 162, 0.2)",
                    }}
                    value={hospitalType}
                    label="Age"
                    type="text"
                    onChange={handleChange}>
                    <MenuItem value={""} sx={{ color: "#FF731D" }}>
                      Clinic
                    </MenuItem>
                    <MenuItem value={"Super Speciaity"}>
                      Super Speciaity
                    </MenuItem>
                    <MenuItem value={"Multi Speciaity"}>
                      Multi Speciaity
                    </MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </SelectWrapper>

                  {hospitalTypeError && (
                    <FormHelperText sx={{ color: "red" }}>
                      Please select hospital type
                    </FormHelperText>
                  )}
                </FormControl>
              </FormControl>

              <FormControl>
                <FormText>State</FormText>
                <InputWrapper
                  variant="filled"
                  color="success"
                  focused
                  placeholder="State"
                  value={stateName}
                  type="text"
                  onChange={(e) => setStateName(e.target.value)}
                  sx={{
                    bgcolor: "rgba(23, 70, 162, 0.05)",
                    "& fieldset": { border: "none" },
                  }}
                />
                {stateNameError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Please enter a valid state
                  </FormHelperText>
                )}
              </FormControl>
            </StackWrapper>

            <StackWrapper
              // sx={{ border: "1px solid red" }}
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 8 }}>
              <FormControl>
                <FormText>Mobile Number</FormText>
                <InputWrapper
                  variant="filled"
                  color="success"
                  focused
                  placeholder="Mobile Number"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  sx={{
                    bgcolor: "rgba(23, 70, 162, 0.05)",
                    "& fieldset": { border: "none" },
                  }}
                />
                {phoneError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Please enter a valid mobile number
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormText>Pin code</FormText>
                <InputWrapper
                  variant="filled"
                  color="success"
                  placeholder="Pin code"
                  type="postal"
                  // inputProps={{
                  //   maxLength: 6,
                  //   // style: { textAlign: "center" },
                  // }}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  focused
                  sx={{
                    bgcolor: "rgba(23, 70, 162, 0.05)",
                    "& fieldset": { border: "none" },
                  }}
                />
                {pinError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Please enter a valid pin
                  </FormHelperText>
                )}
              </FormControl>
            </StackWrapper>
            <StackWrapper>
              <FormControl>
                <FormText>Address</FormText>
                <AddressWrapper
                  variant="filled"
                  color="success"
                  value={address}
                  placeholder="Address"
                  multiline
                  rowsMax={4}
                  // inputProps={{
                  //   sx: {
                  //     "&::placeholder": {
                  //       opacity: 1,
                  //       alignItems: "start",
                  //       color: "grey",
                  //     },
                  //   },
                  // }}
                  onChange={(e) => setAddress(e.target.value)}
                  focused
                />
                {addressError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Please enter a valid address
                  </FormHelperText>
                )}
              </FormControl>
            </StackWrapper>
            <Box
              sx={{
                // border: "1px solid red",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}>
              <ButtonWrapper
                variant="contained"
                sx={{ bgcolor: "#1746A2" }}
                onClick={handleSubmit}
                // onClick={() => setOpen(true)}
              >
                Submit
              </ButtonWrapper>
              <Modal
                open={open}
                onClose={handleClose}
                sx={{
                  backdropFilter: "blur(5px)",
                  //other styles here
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <ModalWrapper sx={{ padding: "2%" }}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    color="#008D6F"
                    marginTop="4%">
                    “Successfully Submitted”
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    "Your hospital details submitted successfully. Your account
                    will be activated after verification. If you have any query,
                    Call or WhatsApp +91-89715-80265
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: " 40px",
                      color: " #1746A2",
                      marginBottom: "2%",
                    }}>
                    Thank you
                  </Typography>
                  <ModalButton variant="contained" onClick={handleClose}>
                    Done
                  </ModalButton>
                </ModalWrapper>
              </Modal>
            </Box>
          </Box>
        </Wrapper>
        {!isMatch ? (
          <></>
        ) : (
          <>
            <Box sx={{ marginTop: "6%", textAlign: "center" }}>
              <Typography
                sx={{ color: "#FF731D", fontSize: "12px", marginBottom: "2%" }}>
                Download Our App
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10%",
                  marginTop: "6%",
                  // border: "1px solid red",
                }}>
                <img src={google} />
                <img src={apple} />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Register;
