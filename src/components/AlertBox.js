import React from 'react';

import {Alert, CloseIcon, HStack, IconButton, Text, VStack} from "native-base";

const AlertBox = ({ status,onClose }) => {
	return (
		<Alert w="100%" status={status.status}>
			<VStack space={2} flexShrink={1} w="100%">
				<HStack flexShrink={1} space={2} justifyContent="space-between">
					<HStack space={2} flexShrink={1}>
						<Alert.Icon mt="1" />
						<Text fontSize="md" color="coolGray.800">
							{status.msg}
						</Text>
					</HStack>
					<IconButton variant="unstyled" onPress={onClose} icon={<CloseIcon size="3" color="coolGray.600" />} />
				</HStack>
			</VStack>
		</Alert>
	);
};

export default AlertBox;
