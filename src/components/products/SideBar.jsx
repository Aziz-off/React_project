import {
    styled,
    Paper,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    IconButton,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useProducts } from "../context/ProductContextProvider";
  import myIcon from "../../assets/Icon-sort.png";
  
  // StyledPaper component with customized styles
  const StyledPaper = styled(Paper)({
    position: "absolute",
    top: "calc(100% + 10px)", // Set distance from the top
    left: "35%",
    transform: "translateX(-50%)",
    width: 300,
    padding: 20,
    outline: "none", // Remove default outline
    borderRadius: 8,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f4a460", // Set background color
    color: "#ffffff", // Set text color
    zIndex: 1000,

  });
  
  const SideBar = () => {
    const { categories, getCategories, fetchByParams } = useProducts();
    const [isIconClicked, setIsIconClicked] = useState(false);
  
    useEffect(() => {
      getCategories();
    }, []);
  
    const handleIconClick = () => {
      setIsIconClicked(true);
    };
  
    const handlePaperClose = () => {
      setIsIconClicked(false);
    };
  
    const handleCategorySelect = (category) => {
      // Handle category selection, e.g., fetch products based on the selected category
      fetchByParams("category", category);
      // Close the modal
      handlePaperClose();
    };
  
    return (
      <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleIconClick}
        >
          <img src={myIcon} alt="My Icon" style={{ width: "24px", height: "24px" }} />
        </IconButton>
        {isIconClicked && (
          <StyledPaper elevation={5} onBlur={handlePaperClose}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
              <RadioGroup
                defaultValue="female"
                name="radio-buttons-group"
                aria-labelledby="demo-radio-buttons-group-label"
              >
                <FormControlLabel
                  control={<Radio />}
                  value={"all"}
                  label={"ALL"}
                  onClick={() => handleCategorySelect("all")}
                  
                />
                {categories.map((elem) => (
                  <FormControlLabel
                    key={elem.id}
                    label={elem.name}
                    control={<Radio />}
                    value={elem.name}
                    onClick={() => handleCategorySelect(elem.name)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </StyledPaper>
        )}
      </>
    );
  };
  
  export default SideBar;
  