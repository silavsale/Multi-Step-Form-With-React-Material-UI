
    // Handle fields change
  const handleChange = input => e  => {

    console.log('inputfff')
    console.log('input',input)
    console.log('e', e)
        // this.setState({[input]: e.target.value})
    }

    const handleChangeb = bam => {
        console.log('bam',{[bam]: 'dddd'})
    }

    handleChangeb('vvvvv')
    handleChange('ddd')


