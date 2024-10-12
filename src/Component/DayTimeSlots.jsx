export default function DayTimeSlots() {
  const slots = [];
  for (let i = 0; i < 24; i++) {
    slots.push(i);
  }
  return (
    <>
      {slots.map((item, index) => {
        return (
          <div className="slot" key={index}>
            {item}:00
          </div>
        );
      })}
    </>
  );
}
