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
import { OutputOutlined } from "@mui/icons-material";
import validator from "validator";
const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "480px",
    height: "1159px",
    // border: "1px solid yellow",
    fontSize: "14px",
    fontFamily: "Poppins",
  },
  [theme.breakpoints.down("sm")]: {
    width: "360px",
    height: "1159px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1240px",
    height: "904px",
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

  fontFamily: "Poppins",
  fontStyle: "normal",
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

  fontFamily: "Poppins",
  fontStyle: "normal",
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
  textAlign: "start",
  color: " white",
  fontWeight: 400,

  fontFamily: "Poppins",
  fontStyle: "normal",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    width: "260px",
    height: "46px",
    marginTop: "16%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));

const names = ["Super Speciaity", "Multi Speciaity", "Others"];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "861px",
  height: "385px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
const validateName = (name) => {
  const nameRegex = /^[a-z ,.'-]+$/i;
  return nameRegex.test(name);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9]{10}$/;
  return phoneRegex.test(phone);
};
const Register = () => {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hospitalName || hospitalName.length < 3) {
      setHospitalNameError(true);
    } else {
      setHospitalNameError(false);
    }
    if (!cityName || cityName.length < 3) {
      setCityNameError(true);
    } else {
      setCityNameError(false);
    }
    if (!hospitalType) {
      setHospitalTypeError(true);
    } else {
      setHospitalTypeError(false);
    }
    if (!stateName || stateName.length < 3) {
      setStateNameError(true);
    } else {
      setStateNameError(false);
    }
    if (!pin) {
      setPinError(true);
    } else {
      setPinError(false);
    }
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
          <Text>
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
                  color="success"
                  focused
                  value={hospitalName}
                  onChange={(event) => setHospitalName(event.target.value)}
                  sx={{
                    width: "400px",
                    height: "60px",
                    bgcolor: "rgba(23, 70, 162, 0.05)",
                  }}
                />
                {hospitalNameError && (
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
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  sx={{
                    width: "400px",
                    height: "60px",
                    bgcolor: "rgba(23, 70, 162, 0.05)",
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
                  <InputLabel id="demo-simple-select-label">
                    Hospital type
                  </InputLabel>
                  <SelectWrapper
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hospitalType}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Super Speciaity</MenuItem>
                    <MenuItem value={20}>Multi Speciaity</MenuItem>
                    <MenuItem value={30}>Others</MenuItem>
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
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  sx={{
                    width: "400px",
                    height: "60px",
                    bgcolor: "rgba(23, 70, 162, 0.05)",
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
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  sx={{
                    width: "400px",
                    height: "60px",
                    bgcolor: "rgba(23, 70, 162, 0.05)",
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
                  type="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  focused
                  sx={{
                    width: "400px",
                    height: "60px",
                    bgcolor: "rgba(23, 70, 162, 0.05)",
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
                  placeholder="Enter Your Text"
                  inputProps={{
                    sx: {
                      "&::placeholder": {
                        opacity: 1,
                        alignItems: "start",
                      },
                    },
                  }}
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
                // onClick={handleOpen}
                onClick={handleSubmit}
                sx={{
                  margin: "auto",
                  width: "300px",
                  height: "60px",
                  borderRadius: "40px",
                  bgcolor: "#1746A2",
                  transform: "none",
                }}>
                Submit
              </ButtonWrapper>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    color="#008D6F">
                    “Successfully Submitted”
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    "Your hospital details submitted successfully. Your account
                    will be activated after verification. If you have any query,
                    Call or WhatsApp +91-89715-80265
                  </Typography>
                  <Typography sx={{ marginTop: " 60px", color: " #1746A2" }}>
                    Thank you
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                      margin: "auto",
                      width: "217px",
                      height: "55px",
                      borderRadius: "40px",
                      bgcolor: "#1746A2",
                      marginTop: " 60px",
                    }}>
                    Done
                  </Button>
                </Box>
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
