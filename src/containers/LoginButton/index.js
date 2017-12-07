import { connect } from "react-redux";
import LoginButton from "./LoginButton";

const mapStateToProps = state => ({ ...state.auth });
export default connect(mapStateToProps)(LoginButton);
