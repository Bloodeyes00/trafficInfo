import React, { useState } from 'react'
import { db } from './../utils/firebase'
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { auth } from './../utils/firebase'
import JobFooter from '../jobfooter/JobFooter';
import "./TaxiJobs.css"
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, InputBase, Menu, Divider } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { useEffect } from "react";
import { Button } from "reactstrap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({

    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  
    dashboardSelectMenu: {
      "& .MuiPopover-paper": {
        minWidth: "380px",
        maxWidth: "fit-content"
      }
    },
    externalLinkIcon: {
      borderLeft: "1px solid var(--color-gray-eighty-five)",
      padding: "10px 0px 10px 10px",
      color: "var(--color-primary)",
      cursor: "pointer"
    },
    checkedItem: {
      color: "indigo"
    }
  }));
  
  const options = [
    {
      value: "Taxi Driver",
      label: "Taxi Driver"
    },
  
    {
      value: "Truck, Bud and Bus Driver ",
      label: "Truck, Bud and Bus Driver"
    },
  
    {
      value: "Mechanic",
      label: "Mechanic"
    },
  
    {
      value: "Factory, Warehouse Worker",
      label: "Factory, Warehouse Worker"
    },
  
    {
      value: "Construction and painters ",
      label: "Construction and painters"
    },
  
    {
      value: "Technicians and IT",
      label: "Technicians and IT"
    },
  ];

function JobSeeker() {
    let history = useHistory()

    const [detail, setDetail] = useState("");
    const [cellnumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");
    const [expernices, setExpernices] = useState("");
    const [profision, setProfision] = useState("");
    const [selectcompnay, setSelectCompnay] = useState("");
    const [selection, setSelection] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [searchText, setSearchText] = useState("");




    const addData = (e) => {
        // e.preventDefault();
        db.collection("JobSeeker").add({
            profision: profision,
            detail: detail,
            cellnumber: cellnumber,
            email: email,
            selectcompnay: selectcompnay,
            posterdID: auth?.currentUser?.uid,
            designation: selection

        }).then(res => {
          history.push("/taxijob");
        })
        
        setSelectCompnay("");
        setProfision("");
        setDetail("");
        setCellNumber("");
        setEmail("");
        setSelection("");

    };

    useEffect(() => {
        setSelection(options[0].label);
      }, []);
    
      const handleMenuOpen = (event) => {
        console.log("adfdasf dfj ;asd", event.currentTarget)
    
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = (e) => {
        if (e.target.innerText !== selection && e.target.innerText !== "") {
          console.log("e target", e.target.innerText)
          setSelection(e.target.innerText);
        }
        setSearchText("");
        setAnchorEl(null);
      };
    
      const handleSearchChange = (e) => {
        setSearchText(e.target.value);
      };
      return (
        <div className='' >
          <Button
            style={{ position: "fixed", marginTop: "160px", marginLeft: "60px", width: "250px" }}
            type="button"
            className={classes.DropDownButton}
            onClick={handleMenuOpen}
          >
            {selection}
            <KeyboardArrowDownIcon />
          </Button>
          {renderDashboardMenu()}
        </div>
      );
      function renderDashboardMenu() {
        const displayOptions = options
          .map((item) => {
            if (item.label.toLowerCase().includes(searchText.toLowerCase())) {
              return item;
            }
            return undefined;
          })
          .filter((item) => item !== undefined);
    
        function renderOption(value) {
          if (selection === value) {
            return (
              <div className={classes.checkedItem}>
                <CheckIcon />
                {value}
              </div>
            );
          }
          return value;
        }
    return (
        <div className='container-jobseeker12'>
            <div className='d-flex '>
                <div className='col-3 mt-4'>
                    <button style={{ color: "black" }}
                        className="btnsss ms-3 mt-1 mb-1 "
                        onClick={() => history.goBack()}>
                        <IoMdArrowBack />
                    </button>
                </div>
                <br />
                <div className='col-6 mt-5 '>
                    <h2>JOB SEEKER</h2>
                </div>
                <div className='col-3 imgcol mt-2'>
                    <img className='imgtxii' src={Trafficinfo1} />
                </div>
            </div>
            <div className='row-taxijobs ms-5'>

                <br />
                <br />

                <div className='col-8'>
                </div>
            </div>
            <br />
            <div className='row-taxidetails ms-3'>
                <h5 className='ms-2 mt-2' style={{ color: "#af0e0c" }}>Taxi Driver</h5>

                <div className='profision '>
                <Menu
                style={{ width: "80%", height: "100%", marginLeft: "65px", marginTop: "180px" }}
                anchorEl={anchorEl}
                keepMounted={true}
                open={!!anchorEl}
                onClose={handleClose}
                className={classes.dashboardSelectMenu}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 110, left: 240 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}

              >
                <MenuItem
                  style={{}}
                  className={classes.searchBarContainer}
                  disableTouchRipple={true}
                >
                  <div
                    style={{}}

                    className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="SEARCH..."
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      onChange={handleSearchChange}
                      value={searchText}
                    />
                  </div>
                </MenuItem>
                <Divider />
                {displayOptions.map((item, index) => {
                  return (
                    <div
                      style={{}}
                      key={index}>
                      <MenuItem
                        style={{}}
                        onClick={(e) => handleClose(e)}>
                        {renderOption(item.label)}
                      </MenuItem>
                      <Divider
                        className={classes.menuDivider} />
                    </div>
                  );
                })}
              </Menu>

               
                </div>

                <br />
                <br />
                <div className='row-dt ms-4'>
                    <div className=' dt'>
                        <p>Details</p>
                        <textarea className='textareas'
                            id='detail'
                            onChange={(e) => {
                                setDetail(e.target.value);
                            }}
                            value={detail}
                            rows="" cols="">
                        </textarea>
                    </div>
                </div>
                <br />

                <div className='row-useredit ms-3 mt-1'>
                    <div className='col-6 contact'>
                        <h6 className='ms-2'>Contact Number</h6> &nbsp;&nbsp;
                        <input onChange={(e) => {
                            setCellNumber(e.target.value);
                        }} value={cellnumber} className='inputsss' type="number" />
                    </div>
                    <br />
                    <div className='col-6 email'>
                        <h6 className='ms-1 '>Email</h6> &nbsp;
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                        }} value={email} className='inputsss' type="text" />
                    </div>
                </div>
<br />

                <div className='rowbutton ms-4 mt-2'>
                    <button style={{ fontSize: "12px" }} className='btadd' onClick={() => {
                        addData(); 
                    }}>Request Jobs</button>

                </div>
            </div>
            <JobFooter />
        </div>
    )
}
}

export default JobSeeker