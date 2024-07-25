import React from 'react'
import style from '../page.module.css'
import Main from "@/components/Main";

function career() {
  return (
    <>
        <Main>
            <section className={style.pageMain} style={{textAlign:"center"}}>
                <h3>Job Application Form</h3>
                <span className={style.muted}>Please fill out the form below to submit
                Your job application.</span>
                <form>
                <div className={style.flex}>
                    <input type="text" className="form-control" placeholder='Full Name'required/>
                    <input type="email" className="form-control" placeholder='Email'required/>
                </div>
                <div className={style.flex}>
                    <input type="number" className="form-control" placeholder='Contact Number'required/>
                    <input type="text" className="form-control" placeholder='Alliped Position'required/>
                </div>
                <div className={style.flex}>
                    <textarea className='form-control' cols={6} rows={2} placeholder="Cover your letter." required/>
                    <div>
                        <h6>Upload Your CV</h6>
                        <input type="file" className="form-control" placeholder='Upload your CV or Resume'required/>
                    </div>
                </div>
                <button className={style.button}>Submit</button>
                </form>
            </section>
        </Main>
    </>
  )
}

export default career