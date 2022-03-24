import { AccountConsumer } from "../../providers/AccountProvider";
import Moment from 'react-moment';

const Account = () => (
  <AccountConsumer>
    { value => (
      <>
        <h1>{value.username}</h1>
        <p>
          Date Joined: 
          <Moment format="MM/DD/YYYY">
            {value.dateJoined}
          </Moment>
        </p>
        <p>
          Membership Level: {value.membershipLvl}
        </p>
      </>
    )}
  </AccountConsumer>
)

export default Account;