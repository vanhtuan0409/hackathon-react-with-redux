import { connect } from "react-redux";
import OrderForm from "./OrderForm";

const mapStateToProps = state => ({ ...state.form });
export default connect(mapStateToProps)(OrderForm);
