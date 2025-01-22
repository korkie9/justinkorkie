"use client"

import ExpComponent from '@/sections/WorkExperience';
import Layout from '@/components/Layout';

const Experience: React.FC = () => {
  return (
    <Layout currentActive="experience">
      <ExpComponent />
    </Layout>
  );
};

export default Experience;
