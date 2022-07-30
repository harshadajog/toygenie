import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Button, Container, CssBaseline, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';

import {BrandEnum, ConditionEnum, AgeRangeEnum, useCreateToyMutation, usePublishedToysQuery } from '@toygenie/graphql-access';
import ToastMessage from '../ToastMessage/ToastMessage';

export function CreateToy() {
  const navigate = useNavigate();
  let val = window.localStorage.getItem("USER")!;
  const [user, setUser] = useState(JSON.parse(val));
  const initialValues = {
    title: "",
    description: "",
    condition: ConditionEnum.New,
    brand: BrandEnum.Barbie,
    ageRange: AgeRangeEnum.Infant,
    listPrice: 0.00,
    category: AgeRangeEnum.Infant,
    author: user.id,
  }
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState(initialValues);
  const [createToyMutation, { data:createToyData, loading, error:createToyError }] = useCreateToyMutation({
      variables: {
      input: {
        title: formValues.title,
        description: formValues.description,
        listPrice: formValues.listPrice,
        condition: formValues.condition,
        brand: formValues.brand,
        ageRange: formValues.ageRange,
        category: formValues.category,
        author: user.id,
        published: true,
      }
    }
  });
    
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        console.log(name," " ,value);
        setFormValues({
            ...formValues,
            [name]: value,
        });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {

        event.preventDefault();
        console.log("Inside create toy handle submit", formValues);
        createToyMutation ({
          variables: {
            input: {
              title: formValues.title,
              description: formValues.description,
              listPrice: 100,
              condition: formValues.condition,
              brand: formValues.brand,
              ageRange: formValues.ageRange,
              category: initialValues.category,
              author: user.id,
              published: true
            }
          }
        })
      };

  useEffect(() => {
    console.log("Inside createToy useEffect");
    if(createToyError){
      console.log("Inside FE Create Toy Listing: ", createToyError.message);
      setError(createToyError.message);
    }
    else if (createToyData) {
      console.log("Inside FE Create Toy Listing: ", createToyData);
      toast.success('Toy posted success!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        navigate("/dashboard");
    }
  }, [createToyData, createToyError])

    const displayConditionAsRadio = (Object.keys(ConditionEnum) as (keyof typeof ConditionEnum)[]).map(
        (val, index) => {
          return (
            <FormControlLabel
                key={val}
                value={val.toUpperCase()}
                control={<Radio size="small" />}
                label={val}
            />
          )
        },
      );

      const displayBrandValues = (Object.values(BrandEnum)).map(
        (val, index) => {
          let str = val.replace("_", " ");
          return (
            <MenuItem key={index} value={val}>{str}</MenuItem>
          )
        },
      );

      const displayAgeRangeValues = (Object.values(AgeRangeEnum)).map(
        (val, index) => {
          let str = val.replace("_", " ");
          return (
            <MenuItem key={index} value={val}>{str}</MenuItem>
          )
        },
      );

    return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
          autoComplete="title"
          autoFocus
      />
      <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          id="description"
          value={formValues.description}
          onChange={handleInputChange}
          autoComplete="description"
          multiline
          rows={4}
      />
      <Grid item>
          <FormControl>
              <FormLabel>Item Condition</FormLabel>
              <RadioGroup
                  name="condition"
                  value={formValues.condition}
                  onChange={handleInputChange}
                  row
              >
              {displayConditionAsRadio}
              </RadioGroup>
          </FormControl>
      </Grid>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="brand">Brand</InputLabel>
          <Select
              labelId="brand-label"
              id="brand-select-helper"
              label="Brand"
              name="brand"
              value={formValues.brand}
              onChange={handleInputChange}
          >
           {displayBrandValues}
          </Select>
          <FormHelperText>
              Select brand
          </FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="ageRange">Age Range</InputLabel>
          <Select
              labelId="ageRange-label"
              id="ageRange-select-helper"
              label="Age Range"
              name="ageRange"
              value={formValues.ageRange}
              onChange={handleInputChange}
          >
           {displayAgeRangeValues}
          </Select>
          <FormHelperText>
              Select Age Range
          </FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="category">Category</InputLabel>
          <Select
              labelId="category-label"
              id="category-select-helper"
              label="Category"
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
          >
           {displayAgeRangeValues}
          </Select>
          <FormHelperText>
              Select Category
          </FormHelperText>
      </FormControl>
      <TextField
          margin="normal"
          required
          type="number"
          id="price"
          label="Price"
          name="listPrice"
          autoComplete="price"
          value={formValues.listPrice}
          onChange={handleInputChange}
          autoFocus
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
          type="submit"
          variant="contained"
          // sx={{ mt: 3, mb: 2 }}
      >
      Submit
      </Button>
      </Box>
  </Box>
    )
}

export default CreateToy;