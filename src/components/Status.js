import React, { Component } from 'react';


class Status extends Component{
    state={
            status:"pending",
            wstatus:false
        }
            
    
    showstatus = () => {
        const doesshow=this.state.wstatus;
        this.setState({
            wstatus:!doesshow
        });

    }
   
    render(){
          let work=null;
        if(this.state.wstatus){
            work="PENDING WORK 😒";            
        }
        return (
            <>
            <button className="button2" onClick={this.showstatus}>Show status</button>
              <p className="status">{work}</p> 
              </>

        );
    }

}

export default Status;