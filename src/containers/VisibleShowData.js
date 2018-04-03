import { connect } from "react-redux";
import { addNumber, minuNumber } from "../actions";
import  ShowData  from "../components/ShowData";

const mapStateToProps = state => {
    return {
        number: state.number
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNumberClick: num => {
            dispatch(addNumber(num))
        },
        minuNumberClick: num =>{
            dispatch(minuNumber(num))
        }
    };
};

const VisibleShowData = connect(mapStateToProps, mapDispatchToProps)(ShowData);

export default VisibleShowData;
