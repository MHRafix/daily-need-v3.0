import Cookie from "js-cookie";
import { MyProfileErrMssg } from "../../../utilities/AlertMessage";
import Breadcrumb from "../../commons/Breadcrumb/Breadcrumb";
import ProfileContentContainer from "../my_profile_dashboard/ProfileContentContainer";
import HistoryDownloadContent from "./HistoryDownloadContent";

export default function HistoryDownloadMain({ my_orders }) {
  // breadcrunb navigation
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  if (userInfo?.user_name) {
    var bread_string = `My Profile/${userInfo?.user_name}/history download`;
  } else {
    // prevent fake user
    const bread_string = "fake user";

    return (
      <MyProfileErrMssg
        bread_string={bread_string}
        message="You are not logged in. Please login to explore more!"
      />
    );
  }

  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ProfileContentContainer>
        <HistoryDownloadContent my_orders={my_orders} />
      </ProfileContentContainer>
    </>
  );
}
