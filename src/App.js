import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./component/Header";
import LeftBar from "./component/LeftBar/LeftBar";
import EmailList from "./component/EmailList";
import Compose from "./component/Compose";
import { login } from "./component/store/authSlice";
import { selectMailOpen } from "./component/store/mailSlice";
import Login from "./component/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import SentBox from "./component/LeftBar/SentBox";
import EmailDetail from "./component/EmailDetail";
import { openWithLogin } from "./component/store/authSlice";

const App = () => {
  const openMain = useSelector(openWithLogin);
  const mailOpen = useSelector(selectMailOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const tkn = localStorage.getItem("token");
    dispatch(login(tkn));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/login">
          {openMain ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route>
          {!openMain ? (
            <Redirect to="/login" />
          ) : (
            <div>
              <Header />
              <div className="app__body">
                <LeftBar />
                <Switch>
                  <Route exact path="/inbox" component={EmailList} />
                  <Route exact path="/sentbox" component={SentBox} />
                  <Route path="/detail/:id" component={EmailDetail} />
                </Switch>
              </div>
              {mailOpen && <Compose />}
            </div>
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
