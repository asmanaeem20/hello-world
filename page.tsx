import React from 'react';

const HelloWorldPage: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundImage: `url('https://images.pexels.com/photos/4072140/pexels-photo-4072140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent black background to blend with the image */
      color: '#fff', /* Text color */
      padding: '20px' /* Add some padding for better readability */
      }}>
      <h1 style={{ fontSize: '3rem', marginTop: '50px' }}>Hello, World!</h1>
      <p style={{ maxWidth: '80%', textAlign: 'center', fontSize: '1.2rem', lineHeight: '1.5' }}>
        Welcome to the beauty of nature. Let the gentle waves kiss your feet as you stroll along the sandy shores. Feel the warmth of the sun on your skin and the cool breeze in your hair. Nature's beauty is a symphony that soothes the soul and ignites the spirit.
      </p>
    </div>
  );
}

export default HelloWorldPage;
