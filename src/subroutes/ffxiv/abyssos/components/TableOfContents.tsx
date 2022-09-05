function TableOfContents(props: any) {
  const scrollTo = (id: string) => {
    const dims = document.querySelector(`#${id}`)?.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims ? dims.top - 40 + window.scrollY : window.scrollY);
  }

  return (
    <div className="table-of-contents section">
      <h1>Table of Contents</h1>
      <ul>
        {
          props.sections.map((element: HTMLElement) => {
            return <li key={element.id} onClick={() => scrollTo(element.id)}>{element.innerText}</li>
          })
        }
      </ul>
      <div className="top" title="Return to top of page" onClick={() => window.scrollTo(window.scrollX, 0)}>^</div>
    </div>
  )
}

export default TableOfContents;