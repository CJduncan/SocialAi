import React, { useState, useEffect} from 'react';
import { FormField, Card, Loader } from '../components';



const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222238] text-[32px]'>
          The Community Showcase
        </h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w[500px] '>
          Here you can find a collection of projects and resources that are generated by DALLE-AI        
        </p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader /> 
          </div>
        ) : (
          <>
          </>
        )}

      </div>
    </section>
  )
}

export default Home