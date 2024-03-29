import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Feedback - ${PAGE_TITLE}`,
    description: '',
};

const Feedback = () => {
    return (
        <>
            <div className='container my-10 px-18 mb-16'>
                <div className='text-center'>
                    <h2 className='mb-5'>WorldTradeX Help Center Satisfaction Survey</h2>
                </div>
                <div className='card' style={{ background: '#F8F8F8' }}>
                    <div className='card-body p-10' style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
                        <form>
                            <div className='mb-7'>
                                <label htmlFor='' className='mb-3'>1. How do you feel about WorldTradeX Help Center? (Choose only one answer)</label>
                                <div className='form-control mb-2'>
                                    <input type='radio' className='me-2' id='html' name='feedback' value='Satisfied' />
                                    <label htmlFor='html'>Satisfied</label><br />
                                </div>
                                <div className='form-control'>
                                    <input type='radio' className='me-2' id='html' name='feedback' value='Unsatisfied' />
                                    <label htmlFor='html'>Unsatisfied</label><br />
                                </div>
                            </div>
                            <div className=''>
                                <label htmlFor='' className='mb-3'>2. If you have any other suggestions/complaints on our Help Center, please feel free to inform us. Your valuable information are highly appreciated.</label>
                                <textarea className='form-control' placeholder='Please input your answer' rows={7} />
                            </div>
                            <div className='mt-11'>
                                <button className='btn btn-dark px-18'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback