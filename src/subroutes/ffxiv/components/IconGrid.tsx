import JobIcon from "./JobIcon"

function IconGrid(props: any) {
  let i = 0;

  return (
    <table style={{fontSize: "2em", borderCollapse: "collapse"}}>
      <tbody>
        {
          props.grid.map((row: string[]) => {
            return (
              <tr key={i++}>
                {
                  row.map((iconName: string) => {
                    return (
                      <td key={i++} className={iconName}>
                        <JobIcon job={iconName} />
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default IconGrid;