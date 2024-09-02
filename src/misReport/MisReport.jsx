
import {useState}  from "react";
import Fade from "@mui/material/Fade";
import CustomTable from "../table/CustomTable";
import classes from "../misReport/MisReport.module.css";


const MisReport = () => {

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
      label: "Quote/Proposal Number",
      id: "quoteProposalNumber",
      hyperLink: true,
    },
    {
      label: "Customer Name",
      id: "customerName",
    },
    {
      label: "Product Name",
      id: "productName",
    },
    {
      label: "Created on",
      id: "createdOn",
    },
    {
      label: "Status",
      id: "status",
    }
  ];

  const data = [
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Pravat Sharma",
      productName: "4 Wheeler",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Bharat H",
      productName: "4 Wheeler",
      createdOn: "8/30/2024",
      status: "Proposal Creation failed",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Rajdeep Paul",
      productName: "bulldozer",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Saurabh A",
      productName: "bulldozer",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Abhishel B",
      productName: "Crane",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Sudesh Nair",
      productName: "Crane",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Prasad S",
      productName: "4 Wheeler",
      createdOn: "8/30/2024",
      status: "Collection Creation failed",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Mohit S",
      productName: "4 Wheeler",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Jitendera R",
      productName: "4 Wheeler",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
    {
      quoteProposalNumber: "DILPOPMCAR00100044801",
      customerName: "Swaraj B",
      productName: "4 Wheeler",
      createdOn: "8/30/2024",
      status: "PARTY STAGE COMPLETED",
    },
  ];
  

  
  
  
  
  const cellClicked = (val) => {
    // setOpenModal(true);
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
        <h3
          style={{
            marginBottom: "20px",
          }}
        >
          {" "}
          MIS Report
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




export default MisReport;