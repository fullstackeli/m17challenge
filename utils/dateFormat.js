// Format timestamp
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Format time (hours:minutes AM/PM)
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12 for 12 AM
    
    return `${month} ${day}, ${year} at ${hours}:${minutes} ${period}`;
  };
  
  module.exports = formatDate;