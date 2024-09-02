import {useState}  from "react";
import Fade from "@mui/material/Fade";
import CustomTable from "../table/CustomTable";
import classes from "./Report.module.css";


const Report = () => {
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const height = "calc(100vh - 10px) !important ";
//   const [data, setData] = useState([]);

  const [rowDetails, setRowDetails] = useState();

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    message: "",
    Transition: Fade,
  });

  const [showSnackBar, setShowSnackBar] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackBarState({
      ...snackBarState,
      open: false,
    });
  };

  const [message, setMessageSnackBar] = useState("");

  const columns = [
    {
      label: "OEM Name",
      id: "oemName",
      hyperLink: true,
    },
    {
      label: "Master Data not present",
      id: "registrationNumber",
    },
    {
      label: "Service Callout Failed",
      id: "serviceCalloutFailed",
    },
    {
      label: "Proposal Creation Failed",
      id: "proposalCreationFailed",
    },
    {
      label: "Issue Quote Creation Failed",
      id: "issueQuoteCreationFailed",
    },
    {
      label: "Collection Creation Failed",
      id: "collectionCreationFailed",
    },
    {
      label: "Issue Policy Failed",
      id: "issuePolicyFailed",
    },
    {
      label: "Error Total",
      id: "errorTotal",
    },
  ];

  const data = [
    {
      oemName: "Maruti",
      registrationNumber: 5,
      serviceCalloutFailed: 3,
      proposalCreationFailed: 2,
      issueQuoteCreationFailed: 1,
      collectionCreationFailed: 4,
      issuePolicyFailed: 2,
      errorTotal: 5 + 3 + 2 + 1 + 4 + 2,
    },
    {
      oemName: "Tata",
      registrationNumber: 2,
      serviceCalloutFailed: 1,
      proposalCreationFailed: 3,
      issueQuoteCreationFailed: 2,
      collectionCreationFailed: 1,
      issuePolicyFailed: 3,
      errorTotal: 2 + 1 + 3 + 2 + 1 + 3,
    },
    {
      oemName: "Nexa",
      registrationNumber: 4,
      serviceCalloutFailed: 2,
      proposalCreationFailed: 1,
      issueQuoteCreationFailed: 3,
      collectionCreationFailed: 2,
      issuePolicyFailed: 1,
      errorTotal: 4 + 2 + 1 + 3 + 2 + 1,
    },
    {
        oemName: "Hyundai",
      registrationNumber: 6,
      serviceCalloutFailed: 4,
      proposalCreationFailed: 1,
      issueQuoteCreationFailed: 3,
      collectionCreationFailed: 2,
      issuePolicyFailed: 1,
      errorTotal: 6 + 4 + 1 + 3 + 2 + 1, 
    },
    {
        oemName: "Mahindra",
        registrationNumber: 8,
        serviceCalloutFailed: 6,
        proposalCreationFailed: 1,
        issueQuoteCreationFailed: 3,
        collectionCreationFailed: 2,
        issuePolicyFailed: 1,
        errorTotal: 8 + 6 + 1 + 3 + 2 + 1,
    },
    {
        oemName: "Tata",
        registrationNumber: 2,
        serviceCalloutFailed: 1,
        proposalCreationFailed: 3,
        issueQuoteCreationFailed: 2,
        collectionCreationFailed: 1,
        issuePolicyFailed: 3,
        errorTotal: 2 + 1 + 3 + 2 + 1 + 3,
      },
      {
        oemName: "Tata",
        registrationNumber: 2,
        serviceCalloutFailed: 1,
        proposalCreationFailed: 3,
        issueQuoteCreationFailed: 2,
        collectionCreationFailed: 1,
        issuePolicyFailed: 3,
        errorTotal: 2 + 1 + 3 + 2 + 1 + 3,
      },
      {
        oemName: "Tata",
        registrationNumber: 2,
        serviceCalloutFailed: 1,
        proposalCreationFailed: 3,
        issueQuoteCreationFailed: 2,
        collectionCreationFailed: 1,
        issuePolicyFailed: 3,
        errorTotal: 2 + 1 + 3 + 2 + 1 + 3,
      },
      {
        oemName: "Tata",
        registrationNumber: 2,
        serviceCalloutFailed: 1,
        proposalCreationFailed: 3,
        issueQuoteCreationFailed: 2,
        collectionCreationFailed: 1,
        issuePolicyFailed: 3,
        errorTotal: 2 + 1 + 3 + 2 + 1 + 3,
      },
  ];
  
  
  
  const cellClicked = (val) => {
    setOpenModal(true);
    //passing row data here
    console.log(val);
    setRowDetails(val);
  };
  const snackBarCallBackFunction = (message) => {
    console.log("snackbar should showUp");
    setShowSnackBar(true);
    console.log(message.toString());
    setSnackBarState((prev) => {
      return {
        ...prev,
        open: true,
        message: message,
      };
    });
  };

  return (
    <>


      <div className={classes.TableOutline}>
        <CustomModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          width={700}
          height={height}
        >
          <ManageSurvey
            rowDetails={rowDetails}
            setOpenModal={setOpenModal}
            snackBarCallBackFunction={snackBarCallBackFunction}
          />
        </CustomModal>
        <h3
          style={{
            marginBottom: "20px",
          }}
        >
          {" "}
          OEM Exception Summary
        </h3>
        <CustomTable
          page={page}
          setPage={setPage}
          columns={columns}
          data={data}
          isNavLink={true}
          cellClicked={cellClicked}
        />
      </div>
    </>
  );
};

export default Report;
