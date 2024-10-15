'use client';

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TransactionCard: React.FC = ({
  title,
  amount,
  type,
  status = "Pending" 
}: {
  title: string,
  amount: string
  type: "deposit" | "withdraw",
  status: "Failed" | "Pending" | "Successful"
}) => {
  return (
    <Box
    display={'flex'}
    alignItems={'center'}
    justifyContent={'space-between'}
    marginY={2}
    cursor='pointer'
    background='#1E1E1E'
    padding={2}
    width='100%'
    cursor='pointer'
    borderRadius={10}
  >
    <Box>
      <Text 
        fontSize={21}
        color='white'
        fontFamily={'heavy'}
      >
        {title}
      </Text>
      <Text 
        fontSize={12}
        color='#HEHEHE'
        fontFamily={'heavy'}
      >
        {title}
      </Text>
    </Box>
    
    <Text 
      fontSize={21} 
      fontFamily={'heavy'}
      color={type == "deposit" ? "green": "red"}
    >
      {amount}
    </Text>
  </Box>
  );
};

export default TransactionCard;
