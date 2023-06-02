function UniqueForm() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekJyW_pRQ6qchk_kKdg28LY6exvvlPrIaPDPDcaQ7yhRHxNQ/viewform?embedded=true" width="640" height="2579" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          `,
        }}
      />
    );
  }
  
  export default UniqueForm;
  