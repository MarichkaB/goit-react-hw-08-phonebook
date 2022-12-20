import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
} from 'redux/auth/authSelector';
import { Circles } from 'react-loader-spinner';
import s from './homePage.module.css';

const HomePage = () => {
  const userName = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenStatus = useSelector(selectToken);

  return (
    <div className={s.page_home}>
      {tokenStatus ? (
        isLoggedIn ? (
          <div className={s.box}>
            <h2 className={s.title_home}>{`Welcome, ${userName}!`}</h2>
            <p className={s.text_home}>
              You can click on <b>"Contacts"</b> to see your contact list, or
              you can add someone or delete a contact.
            </p>
          </div>
        ) : (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )
      ) : (
        <div className={s.box}>
          <h2 className={s.title_home}>
            Welcome to your phonebook, register or login please!
          </h2>
        </div>
      )}
    </div>
  );
};

export default HomePage;
