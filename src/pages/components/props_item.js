function Item({ name, isPacked }) {
    return <li className="item"> 
    {isPacked ? <del>{name}</del> : name }
    </li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item name='Laptop' packed={false}/>
        <Item name='Chargers' packed={true}/>
        <Item name='Socks' packed={true}/>
      </ul>
       
    </section>
  );
}
