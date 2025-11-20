import React from 'react'
import Featuretop from '../Features/Featuretop'; 
import FeatureSection from '../Home/FeaturesSection';
import useAppData from "../../hooks/useAppData";


const Features = () => {
     const { data, loading, error } = useAppData();
   if (loading) return <h3>Loading...</h3>;
  
   if (error) return <h3>{error}</h3>;

  return (
    <div>
      <Featuretop />
      <FeatureSection features={data.features}/>
    </div>
  )
}

export default Features
