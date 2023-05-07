import { Box, VStack } from '@chakra-ui/react';

import KuudraItemInput from '@/components/KuudraItemInput'
import StandardLayout from '@/components/Layout/StandardLayout';
import ArmorAttributeInput from '@/components/ArmorAttributeInput';

export default function Home() {
  return (
    <Box>
      <StandardLayout>
        <Box marginTop={"5%"} display={"flex"} justifyContent={"center"}>
          <VStack width={"100%"} spacing={100}>
            <KuudraItemInput style={{ width: "70%" }} />
            <ArmorAttributeInput style={{ width: "70%" }} />
          </VStack>
        </Box>
      </StandardLayout>
    </Box>
  );
}
