import { Box } from '@chakra-ui/react';

import KuudraItemInput from '@/components/KuudraItemInput'
import StandardLayout from '@/components/Layout/StandardLayout';

export default function Home() {
  return (
    <Box>
      <StandardLayout>
        <Box marginTop={"5%"} display={"flex"} justifyContent={"center"}>
          <KuudraItemInput style={{ width: "70%" }} />
        </Box>
      </StandardLayout>
    </Box>
  );
}
