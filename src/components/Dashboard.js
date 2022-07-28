import Header from './Header';

function Dashboard() {
  let user = JSON.parse(localStorage.getItem('user-info'));
  
  return (
    <>  
      <Header />
      <div>
        <h1>Welcome { user.firstname }</h1>
      </div>
    </>
  )
}

export default Dashboard