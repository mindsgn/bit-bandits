'use client';

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Button } from './button';
import { useRouter } from 'next/navigation'

export type HeroProp = {};

function Hero({}: HeroProp) {
  const route = useRouter()
  return (
    <Box
      display={'flex'}
      flexDir={['column', 'column', 'column', 'column']}
      padding={5}
      paddingTop={100}
      height="90vh"
      flex={1}
      position={'relative'}
    >
      <Heading
        marginY={2}
        color="white"
        fontFamily="heavy"
        cursor={'pointer'}
        textAlign={'center'}
        fontSize={[20, 40, 60, 60]}
        marginBottom={20}
      >
        {`Welcome to Stokvel, where seamless connections and smart investments meet.`.toUpperCase()}
      </Heading>

      <Text
        display={['none', 'none', 'none', 'none']}
        marginY={4}
        fontFamily="heavy"
        cursor="pointer"
        color="gray"
      >
        {
          'Amafa is a modern, asset management software that lets you create, manage, assign and overview your assets and equipment. From small office equipment to construction cranes.'
        }
      </Text>

      <Box
        display={'flex'}
        flexDir={['column', 'column', 'row', 'row']}
        justifyContent={'center'}
        width="100%"
        alignItems={'center'}
      >
        <Button 
          background='white'
          color='black'
          onClick={() => {
            route.push("/login")
          }}
          title='GET STARTED'
        />
        {
          //*<PlatformButton image={'/ios.png'} /> <PlatformButton image={'/google.png'} />*//
        }
      </Box>
    </Box>
  );
}

export { Hero };
