import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function PageLoading() {
  return (
    <Backdrop
      open
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.common.white,
        backgroundColor: theme.brandPalette.blackAlpha["300"],
      })}
    >
      <CircularProgress color="inherit" size={70} />
    </Backdrop>
  );
}

export default PageLoading;
