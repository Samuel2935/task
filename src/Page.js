import React from 'react';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Page() {
  return (
    <div className="pageWrapp">
      <div className="pager">
        <div className="count">Task
        <button
                  style={{
                    backgroundColor: '#fff',
                    color: 'yellowgreen',
                    width: '20%',
                    float: 'right',
                    margin: '0',
                    border:"1px solid yellowgreen"
                  }}
                >
                  +
                </button>
        </div>

        <div className="info">
          <div>
            {' '}
            <p>Assigned User info</p>
          </div>

          <div className="ifn">
            <div className="para">
              {/* user info goes here */}
              get me water!!😊 thanks Abiodun 🙏
            </div>
            <div className="btns">
              <button
                style={{
                  width: '25px',
                  height: '25px',
                  float: 'right',
                  border: 'none',
                }}
              >
                {' '}
                <BorderColorIcon style={{color:"#999"}}/>
              </button>
              <button
                style={{
                  width: '25px',
                  height: '25px',
                  float: 'right',
                  border: 'none',
                }}
              >
                {' '}
                <DeleteIcon style={{color:"#999"}}/>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='user'>No User yet</div>
<div className='contact'>
  <p>contact</p>
<div>  <EmailIcon/></div>
<div>  <QuestionAnswerIcon/></div>
<div><PhoneEnabledIcon /></div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
