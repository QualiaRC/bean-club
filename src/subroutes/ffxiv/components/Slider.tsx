function Slider(props: any) {

  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "auto", marginRight: "0.5em" }}>
      <div style={{ fontSize: "32px", marginTop: "-4px" }}>{props.label}</div>
      <label className="switch">
        <input type="checkbox" defaultChecked onChange={(e) => props.toggled(e.target.checked)} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Slider