import React from 'react'
import Backdrop from '@mui/material/Backdrop';

const Loading = () => {
  return (
                <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={true}
                    >
                         <div className="pyramid-loader1">
                            <div className="wrapper1">
                                <span className="side1 side11"></span>
                                <span className="side1 side21"></span>
                                <span className="side1 side31"></span>
                                <span className="side1 side41"></span>
                                <span className="shadow1"></span>
                                
                            </div>  
                
                        </div>
                </Backdrop>
  )
}

export default Loading