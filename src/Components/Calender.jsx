import Calendar from 'react-calendar'
import { useState } from 'react';
const Calender = () => {
function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
             <Calendar onChange={onChange} value={value} />
        </div>
    );
};
}
export default Calender;