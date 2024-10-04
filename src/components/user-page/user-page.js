import React, {useContext} from "react";
import {LoginContext} from "../../services/login-context";

function UserPage(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.updateUserInfo({ name: e.target.name.value });
  }

  const [login, setLogin] = useContext(LoginContext);

  return (
    <section>
      <h2>Личный кабинет</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>{`login name: ${login.login_name}`}</div>
          <label htmlFor="name">Имя: </label>
          <input id="name" type="text" placeholder={props.user.name} />
        </div>
        <div>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </section>
  );
}

export default UserPage;