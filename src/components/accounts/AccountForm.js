import { useState } from 'react';
import { AccountConsumer } from '../../providers/AccountProvider';

const AccountForm = ({ id, updateAccount }) => {
  const [user, setUser] = useState({ username: '', membershipLvl: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    updateAccount(id, user)
    setUser({ username: '', membershipLvl: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>New Username</label>
        <input
          name="username"
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value })}
        />
        { id ? 
          <>
            <label>Date</label>
            <input
              type='date'
              name="dateJoined"
              value={user.dateJoined}
              onChange={(e) => setUser({...user, dateJoined: e.target.value })}
            />
          </>
        : null}
        <label>Membership Level</label>
        <select
          name="membershipLvl"
          onChange={(e) => setUser({...user, membershipLvl: e.target.value})}
        >
          { membershipOpts.map( m => 
            <option 
              value={m.value} 
            >
              {m.text}
            </option>
          )}
        </select>
        <button>Save</button>
      </form>
    </>
  )
}

const membershipOpts = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

const ConnectAccountForm = (props) => (
  <AccountConsumer>
    { value => <AccountForm {...props} {...value} />}
  </AccountConsumer>
)

export default ConnectAccountForm;