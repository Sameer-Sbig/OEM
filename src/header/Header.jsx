import React, { useState } from 'react';
import  { useEffect} from "react";
import classes from "./Header.module.css";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const nav = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            nav(`/directSearch?query=${encodeURIComponent(searchQuery)}`);
        }
    };
    const [loginPageImage, setLoginPageImage] = useState('');
  const [logoImage, setLogoImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // https://ansappsuat.sbigen.in/BMS
        const response = await axios.get('https://secure.sbigeneral.in/BMS/images');
        const { loginImage, sbigLogo } = response.data;

        setLoginPageImage(`data:image/jpeg;base64,${loginImage}`);
        setLogoImage(`data:image/jpeg;base64,${sbigLogo}`);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

    return (
        <>
            <nav className={classes.header}>
                <div>
                    <NavLink to="/">
                        <img src={logoImage} alt="SBIG Logo" />
                    </NavLink>
                </div>

                <div>
                    <FormControl
                        sx={{
                            m: 1,
                            borderRadius: '100px',
                            width: '50ch',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                            },
                        }}
                        variant="outlined"
                        size="small"
                    >
                        <OutlinedInput
                            id="outlined-adornment-search"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="search" edge="end" sx={{ width: '15px', marginRight: '10px' }} onClick={handleSearch}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

                <div>
                    <IconButton size="large" sx={{ width: '15px', marginRight: '10px' }}>
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                </div>
            </nav>
        </>
    );
};

export default Header;