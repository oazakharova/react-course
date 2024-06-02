function withLoadingIndicator(Component, isLoading ) {
  return ({isLoading, ...props}) => {
      if (isLoading) {
        return <div>Загрузка...</div> // любой спиннер
      }
     return <Component {...props} />
  }
}

export default withLoadingIndicator;