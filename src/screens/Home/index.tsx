import React from 'react'
import styled from 'styled-components/native'

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  font-size: 24px;
`

export const Home: React.FC = () => {
    return (
        <View>
            <Text>Home Page</Text>
        </View>
    )
}

